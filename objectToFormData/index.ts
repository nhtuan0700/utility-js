export const objectToFormData = (obj: { [key in string]: any }, formData = new FormData(), parentKey = '') => {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}[${key}]` : key
      if (obj[key] === null) {
        continue
      }
      if (typeof obj[key] !== 'object' || obj[key] instanceof File) {
        formData.append(newKey, obj[key])
      } else {
        objectToFormData(obj[key], formData, newKey)
      }
    }
  }
  return formData
}
