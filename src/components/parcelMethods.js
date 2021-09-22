const moment = require("moment");

export function getStatusColor(status) {
  switch (status) {
    case "delivered":
      return "orange";
    case "ready-for-pickup":
      return "green";
    case "on-the-way":
      return "pink";
    case "order-info-received":
      return "blue";
    default:
      return "red";
  }
}

export function getEta(timestamp) {
  const etaDay = moment(timestamp).format("ddd MM ");
  const etaTime = moment(timestamp).format("HH:mm");
  return `${etaDay} at ${etaTime}`;
}
