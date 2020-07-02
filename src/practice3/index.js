// export const getPoetry = () => fetch('https://v1.jinrishici.com/all.json', {
//   method: 'GET'
// }).then(response => response.json())
//   .then(json => {
//     let result = [];
//     result.push(json.origin, json.author, json.content);
//     return result;
//   })
//   .catch(err => console.log(err));

export async function getPoetry() {
  const response = await fetch('https://v1.jinrishici.com/all.json', {
    method: 'GET'
  });

  const json = await response.json();
  let result = [];
  result.push(json.origin, json.author, json.content);
  return result;
}