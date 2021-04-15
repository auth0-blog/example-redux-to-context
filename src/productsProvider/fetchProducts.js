const mockProducts = [
  {
    name: 'Chair',
    price: '24.95',
    image: 'https://via.placeholder.com/128',
  },
  {
    name: 'Couch',
    price: '195.34',
    image: 'https://via.placeholder.com/128',
  },
  {
    name: 'Bed',
    price: '200',
    image: 'https://via.placeholder.com/128',
  },
  {
    name: 'Stool',
    price: '35.5',
    image: 'https://via.placeholder.com/128',
  },
]

export const fetchProducts = async () => {
  return Promise.resolve(mockProducts)
}
