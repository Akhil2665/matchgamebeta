import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeActivetab, activeTab} = props
  const {tabId, displayText} = tabDetails

  const onClickedTab = () => onChangeActivetab(tabId)
  const tabClass = activeTab === tabId ? 'each-tab active-tab' : 'each-tab'

  return (
    <li className={tabClass}>
      <button type="button" onClick={onClickedTab} className="tab-button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
