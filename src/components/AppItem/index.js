// Write your code here

import './index.css'

const AppItem = props => {
  const {eachappItem} = props
  const {imageUrl, appName} = eachappItem
  return (
    <li className="listed-appItems">
      <img alt={appName} src={imageUrl} className="appImage" />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
