const API_SPECS = {
  apiVersion: 1.0,
};

export function errorObj(err) {
  return {
    ...API_SPECS,
    error: {
      name: err.name,
      cause: err.cause,
      message: err.message,
    },
  };
}

export function successObj(data = []) {
  return {
    ...API_SPECS,
    data: data,
  };
}
