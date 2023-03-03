import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <div className="expense_item">
      <div className="date">
    {props.date}
      </div>
      <div className="expense_item_desc">
      <div className="title">{props.title}</div>
        <div className="expense_item_amount">{props.amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
