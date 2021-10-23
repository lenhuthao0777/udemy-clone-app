import Tables from 'component/Table/components/Table'
import React from 'react'

function AdminUser({columns, data, loading}) {
  return (
    <Tables columns={columns} data={data} loading={loading} />
  )
}

export default AdminUser
