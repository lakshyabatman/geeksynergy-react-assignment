

class CacheManager {

  set(key,val) {
    localStorage.setItem(key,val);
  }

  get(key) {
    return localStorage.getItem(key)
  }

  setAll(obj) {
    Object.keys(obj).forEach(key => this.set(key,obj[key]))
    
  }
  clear(key) {
    localStorage.removeItem(key)
  }

  isLogged() {
    return this.get('isLogged') && this.get('name') && this.get('pass')
  }

}

export default  new CacheManager()