import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createShortLink, selectLoading } from '../store/slice/LinkSlice'

const Form = () => {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  })

  const onSubmit = ({ Url }) => {
    dispatch(createShortLink(Url))
    reset()
  }

  return (
    <section id="form" className="relative">
      <div className="shortly__form relative top-[-55px] box-div">
        <div className="shortly__form-wrapper rounded-lg max-w-4xl mx-auto py-6 sm:px-6">
          <form
            className="flex flex-col items-center justify-center sm:flex-row sm:items-start"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-10/12">
              <input
                type="url"
                placeholder="Shorten link here..."
                className="border-none h-12 bg-white rounded-md text-base outline text-[#bab9c0] px-4 w-full my-2"
                {...register('Url', {
                  required: 'Please add a link',
                  pattern: {
                    value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
                    message: 'Please enter a valid URL',
                  },
                })}
                style={{
                  outlineColor: errors.Url ? '#ef4444' : 'currentcolor',
                  outlineWidth: errors.Url ? '2px' : 0,
                }}
              />
              <div>
                {errors.Url && (
                  <div className="text-red-500">{errors.Url.message}</div>
                )}
              </div>
            </div>
            <button
              className="light-btn-lg cursor-pointer rounded-md my-2 w-10/12 sm:w-[142px] sm:ml-4 sm:text-base sm:px-4"
              type="submit"
              disabled={loading === 'loading'}
            >
              Shorten it
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
