import Api from '@/Api/Api'

export default {
  getShoppingList (params) {
    return Api().get('assets/shopList.json' + params)
  }
}