import 'react'
import imageBefore from 'src/images/product_img_before.webp'
import imageAfter from 'src/images/product_img_after.png'
import imageAfter2 from 'src/images/product_img_after_2.png'
import Image from 'next/future/image'

export default () => {
  return (
    // flex flex-col justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative
    <div className="flex flex-col lg:flex-row justify-between mx-auto max-w-7xl lg:max-w-4xl sm:px-6 lg:px-8 py-20 sm:py-32">
    {/* <div className="relative mx-auto flex max-w-2xl flex-col justify-between py-20 sm:py-32 lg:max-w-4xl lg:flex-row lg:px-12"> */}
      <div className="flex w-full flex-col content-center justify-start lg:w-4/12">
        <h5 className="text-center sm:text-left mb-11 font-display text-2xl font-bold tracking-tighter text-blue-900 sm:text-2xl">
          Transform your product images from this
        </h5>
        <Image className="" src={imageBefore} />
      </div>
      <div className="flex w-full flex-col content-center justify-center sm:w-auto">
        <h5 className="text-center font-display text-2xl font-bold tracking-tighter text-blue-900 duration-300 ease-in sm:text-2xl">
          To this
        </h5>
        <svg
          className="hidden lg:block"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 579.083 579.083"
          fill="rgb(79,70,229)"
        >
          <g>
            <path d="M492.551,389.644c31.823-21.42,100.979-64.872,83.844-111.997c-19.584-52.632-89.964-94.248-134.028-124.236   c-25.092-17.136-110.771-78.336-140.76-41.004c-1.836,1.836-2.448,4.896-1.836,7.344c-12.24,25.092-4.896,64.26-4.896,91.188   c0,4.896,0,9.792,0,14.688c-89.963-0.612-187.883-29.988-275.399-4.284c-5.508,1.836-7.956,5.508-8.568,9.18   c-0.612,0-1.224,0.612-1.836,0.612c-13.464,7.956-7.956,38.556-7.956,52.02c0,23.257-0.612,47.737,3.672,70.38   c1.224,5.509,4.896,8.568,9.18,9.181c2.448,3.06,4.896,4.284,8.568,4.284c92.412-1.225,182.988-12.24,275.399-6.732   c0,29.376-1.224,58.752-5.508,88.128c-0.612,3.672,0.611,6.732,1.836,9.18c-6.12,7.345,0.611,22.645,13.464,20.809   C372.599,469.203,439.307,425.14,492.551,389.644z" />
          </g>
        </svg>
      </div>
      <div className="relative flex w-full flex-col lg:w-4/12">
        <Image objectFit="contain" className="mb-2" src={imageAfter} />
        <Image objectFit="contain" className="" src={imageAfter2} />
      </div>
    </div>
  )
}
