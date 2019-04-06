import Api from '@/Api/Api'

export default {
  getShoppingList() {
    return Api().get('shopList.json')
  }
}