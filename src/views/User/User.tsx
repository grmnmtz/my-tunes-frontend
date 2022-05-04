import { useNavigate, Outlet } from 'react-router-dom'

export const User = () => {
  const navigate = useNavigate()
  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack
  return (
    <>
      <h2>User Profile Page</h2>
      <Outlet />
      {/* <button>Place Order</button> */}
    </>
  )
}
