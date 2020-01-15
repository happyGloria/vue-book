import localForage from 'localforage'

export function setLocalForage (key, data, cb, cb2) {
  localForage.setItem(key, data)
    .then(val => cb && cb(val))
    .catch(err => cb2 && cb2(err))
}

export function getLocalForage (key, cb) {
  localForage.getItem(key, (err, val) => cb(err, val))
}

export function removeLocalForage (key, cb, cb2) {
  localForage.removeItem(key)
    .then(val => cb && cb(val))
    .catch(err => cb2 && cb2(err))
}

export function clearLocalForage (cb, cb2) {
  localForage.clear()
    .then(() => cb && cb())
    .catch(err => cb2 && cb2(err))
}

export function lengthLocalForage (cb) {
  localForage.length()
    .then(numberOfKeys => cb && cb(numberOfKeys))
    .catch(err => console.log(err))
}
export function iteratorLocalForage () {
  localForage.iterate((value, key, iterationNumber) => {
    console.log(key, value)
  }).then(function () {
    // console.log('Iteration has completed')
  }).catch(function (err) {
    if (err) { }
    // console.log(err)
  })
}

export function support () {
  const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || null
  if (indexedDB) {
    return true
  } else {
    return false
  }
}
