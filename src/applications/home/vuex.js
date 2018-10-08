import supporters from './data/supporters.json'

const getters = {
  supporters: () => {
    const diamond = []
    const palladium = []
    const special = []
    const gold = []
    const affiliate = []
    const service = []

    const matches = (str, comp) => str.toLowerCase().indexOf(comp.toLowerCase()) > -1

    for (const supporter of supporters) {
      const pledge = supporter.pledge
      const type = supporter.type

      if (pledge) {
        if (matches(pledge, 'diamond')) diamond.push(supporter)
        if (matches(pledge, 'palladium')) palladium.push(supporter)
        if (matches(pledge, 'special')) special.push(supporter)
        if (matches(pledge, 'gold')) gold.push(supporter)
      } else {
        if (matches(type, 'affiliate')) affiliate.push(supporter)
        if (matches(type, 'service')) service.push(supporter)
      }
    }

    return {
      diamond,
      palladium,
      special,
      gold,
      affiliate,
      service
    }
  }
}

export default function (store) {
  store.registerModule('home', {
    namespaced: true,
    getters
  })
}
