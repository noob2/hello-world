export default {
  async fetchData() {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock data received from the API
    const response = [
      { id: 1, data: 123 },
      { id: 2, data: 456 },
      { id: 3, data: 789 }
    ]

    return response
  }
}
