'use client'

import { useEffect, useState } from 'react'

type Person = {
  name: string
  age: string
}

export default function Home() {
  const [people, setPeople] = useState<Person[]>([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')  

  useEffect(() => {
    const query = new URLSearchParams()
    if (name.trim()) query.append('name', name.trim())
    if (age.trim()) query.append('age', age.trim())
    
    fetch(`http://localhost:8000/api/people?${query.toString()}`)
      .then(res => res.json())
      .then(data => setPeople(data))      
  }, [name, age])

  return (
    <main className='main-container'>
      <h1 className='table-title'>Filterable Table</h1>

      <div className='filter-container'>
        <label>
          Name:{' '}
          <input
            value={name}
            onChange={e => setName(e.target.value)}            
          />
        </label>

        <label>
          Age:{' '}
          <input
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </label>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {people.length === 0 ? (
            <tr>
              <td colSpan={2}>No results found</td>
            </tr>
          ) : (
            people.map((p, index) => (
              <tr key={index}>
                <td>{p.name}</td>
                <td>{p.age}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </main>
  )
}
