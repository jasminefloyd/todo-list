import PropTypes from 'prop-types'

export default function ListItems({ toDoArray }) {
  return (
    

    <div>
      {toDoArray.map((item, index) => (
        <div className='listItems' key={index}>
          <input type="checkbox" id={`item-${index}`} checked={item.checked} />
          <label htmlFor={`item-${index}`}>{item}</label>
        </div>
      ))}
    </div>
  );
}


// Adding prop types validation
ListItems.propTypes = {
  toDoArray: PropTypes.array.isRequired,
};