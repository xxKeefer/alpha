export interface Message {
  message: string
}

export interface ApiError extends Message {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any
}
