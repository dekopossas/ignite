import React from 'react'
import Lession from './Lession'

function Sidebar() {
  return (
    <aside className="w-[348px] br-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pd-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        <Lession 
          title="Aula-01"
          slug="aula-01"
          availableAt={new Date()}
          type="class"
        />
      </div>
    </aside>
  )
}

export default Sidebar