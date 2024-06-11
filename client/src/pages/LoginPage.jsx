import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <form
      onSubmit={e => e.preventDefault}
      className='w-1/4 h-60 mx-auto mt-40'
    >
      <h1 className='text-lg text-white text-center'>
        Авторизация
      </h1>
      <label className='text-xs text-gray-400'>
        Username:
        <input
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
          type="text"
          placeholder='Username'
        />
      </label>
      <label className='text-xs text-gray-400'>
        Password:
        <input
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700'
          type="password"
          placeholder='Password'
        />
      </label>
      <div className='flex gap-8 justify-center mt-4'>
        <button
          className='flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-2 px-4'
          type='submit'
        >
          Войти
        </button>
        <Link
          className='flex jystify-center items-center text-xs text-white'
          to='/register'
        >
          Нет аккаунта?
        </Link>
      </div>
    </form>
  )
}
