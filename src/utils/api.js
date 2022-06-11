const url = 'data/db.json'
export const fetchTodos = async () => {
  const response = await fetch(url)
  const json = response.json()
  return json
}