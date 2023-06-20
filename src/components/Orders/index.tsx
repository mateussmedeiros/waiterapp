import { useEffect, useState } from "react";
import socketIo from "socket.io-client";

import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { api } from "../../utils/api";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const socket = socketIo("http://localhost:3001", {
      transports: ["websocket"],
    });

    socket.on("orders@new", (order) => {
      setOrders((prevState) => prevState.concat(order));
    });
  }, []);

  useEffect(() => {
    api.get("/orders").then(({ data }) => {
      setOrders(data);
    });
  }, []);

  const waiting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter(
    (order) => order.status === "IN_PRODUCTION"
  );
  const done = orders.filter((order) => order.status === "DONE");

  function handleStatusOrderChange(orderId: string, status: Order["status"]) {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  }

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de Espera"
        orders={waiting}
        onChangeOrderStatus={handleStatusOrderChange}
        onCancelOrder={handleCancelOrder}
      />

      <OrdersBoard
        icon="🧑‍🍳"
        title="Em Preparação"
        orders={inProduction}
        onChangeOrderStatus={handleStatusOrderChange}
        onCancelOrder={handleCancelOrder}
      />

      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={done}
        onChangeOrderStatus={handleStatusOrderChange}
        onCancelOrder={handleCancelOrder}
      />
    </Container>
  );
}
