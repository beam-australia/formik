import * as Yup from 'yup'

export default Yup.object().shape({
  first_name: Yup.string().min(2).max(50).required(),
  last_name: Yup.string().min(2).max(50).required(),
  password: Yup.string().min(6).max(50).required(),
  mammals: Yup.string().min(6).required(),
  fungi: Yup.string().required(),
  // reptiles: Yup.string().min(6).required(),
  // ungulates: Yup.string().min(6).required(),
  insects: Yup.array().of(Yup.string()).min(2).required(),
  birds: Yup.string().min(5).max(50).required(),
  expert: Yup.bool().required(),
  phd: Yup.bool().required()
})
