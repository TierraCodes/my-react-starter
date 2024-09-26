
const pics = [
  {link:"/pictures/bear.png", id:0},
  {link:"/pictures/dog.png",id:1},
  {link:"/pictures/cat.jpg",id:2},
  {link:"/pictures/lizard.jpg",id:3}
]


export default function Images(pics) {

  const picList = pics.map(pic =>
    <li key={pic.id}>
      {pic.link}
    </li>
  );

  return (
    <ul>{picList}</ul>
  );
}