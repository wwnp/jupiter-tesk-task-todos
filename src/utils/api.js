const url = 'data/db.json'
export const fetchTodos = async () => {
  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  })
  console.log(response)
  const json = response.json()
  console.log(json)
  return json
}