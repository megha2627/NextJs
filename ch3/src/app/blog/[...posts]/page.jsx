

const page = ({params}) => {
  console.log(params);
  return (
    <div>
      new post {params}
    </div>
  )
}

export default page
