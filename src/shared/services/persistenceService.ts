export const persistenceService = {
  set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }  
  },

  get(key: any): any {
    try {
      const userToken = JSON.parse(localStorage.getItem(key) as string)
      return userToken
    } catch (error) {
      console.log(error)
    }
  },

  remove(key: string): void {
    try {
      const removeToken = localStorage.removeItem(key)
      return removeToken
    } catch (error) {
      console.log(error)
    }
  }
}