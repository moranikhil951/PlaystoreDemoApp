// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabItem, displayTextButton, isActiveStyle} = props
  const {displayText, tabId} = eachTabItem

  const onClickButton = () => {
    displayTextButton(tabId)
  }

  const isActiveStyleTrue = isActiveStyle ? 'stylingUnderlineButton' : ''

  return (
    <li className="listed-items-tabItem">
      <button
        type="button"
        className={`tabButtons ${isActiveStyleTrue}`}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
