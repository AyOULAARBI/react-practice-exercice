import React from 'react'

function Dashboard({userName}) {
  return (
    <div>
        <h1>Hi {userName},welcome to your Dashboard</h1>
        <section>this section should contain information related to the current user
        </section>
    </div>
  )
}

export default Dashboard