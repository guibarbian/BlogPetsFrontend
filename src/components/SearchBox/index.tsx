import './styles.module.css'

const SearchBox = ( {...props}:  React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} />
  )
}

export default SearchBox
