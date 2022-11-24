import swal from "sweetalert";

export const ALERT_TYPE = {
  WARNING: "warning",
  INFO: "info",
  ERROR: "error",
  SUCCESS: "success",
};

export const Alert = ({
  title,
  description,
  type = ALERT_TYPE.INFO,
  callback = () => {},
}) => {
  swal(title, description, type).then(callback);
};