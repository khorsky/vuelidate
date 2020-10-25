import requiredUnless from '../raw/requiredUnless'

/**
 * Returns required unless the passed property is truthy
 * @param {Boolean | String | function(): (Boolean | Promise<boolean>)} prop
 * @return {NormalizedValidator}
 */
export default prop => ({
  $validator: requiredUnless(prop),
  $message: 'The value is required'
})
