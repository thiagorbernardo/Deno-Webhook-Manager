class HttpClient {
  private readonly headers = {
    "Content-Type": "application/json",
  };

  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async post(body: string) {
    const params: RequestInit = {
      headers: this.headers,
      method: "POST",
      body: body,
    };

    return await fetch(this.baseUrl, params);
  }
}

export { HttpClient };
