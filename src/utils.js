export const getRandom = (max=100, min=0) => {
  return Math.floor(Math.random()*((max+1)-min)+min)
}