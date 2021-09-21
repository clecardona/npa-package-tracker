const moment = require("moment");

export function getStatus(rawStatus) {
  switch (rawStatus) {
    case "delivered":
      return ["Delivered", "orange"];
    case "ready-for-pickup":
      return ["Ready for pickup", "green"];
    case "on-the-way":
      return ["On the way", "pink"];
    case "order-info-received":
      return ["Info received", "blue"];
    default:
      return ["Parcel Lost...", "red"];
  }
}

export function getEta(timestamp) {
  const etaDay = moment(timestamp).format("ddd MM ");
  const etaTime = moment(timestamp).format("HH:mm");
  return `${etaDay} at ${etaTime}`;
}
