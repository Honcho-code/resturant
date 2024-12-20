import React from 'react'
import { ButtonPrimary } from './Button';

const Footer = () => {
    const sitemap = [
        {
          label: 'Home',
          href: '#home'
        },
        {
          label: 'About',
          href: '#about'
        },
        {
          label: 'Work',
          href: '#work'
        },
        {
          label: 'Reviews',
          href: '#reviews'
        },
        {
          label: 'Contact me',
          href: '#contact'
        }
      ];
      
      const socials = [
        {
          label: 'GitHub',
          href: 'https://github.com/Honcho-code'
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/clinton-rapheal-65b561212'
        },
        {
          label: 'Twitter X',
          href: 'https://x.com/honchocode?s=21'
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/the_rapheal_code?igsh=amVpNzRmemhsbTQx&utm_source=qr'
        }
      ];
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary href="mailto:clintonrapheal5@gmail.com" label="Start project" icon="chevron_right" classes="reveal-up"/>
                </div>

                <div className="grid grid-cols-2 gap-4 g:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>

                        <ul>
                            {sitemap.map(({label, href}, key)=>(
                                <li key={key} className=''>
                                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up" >{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>

                        <ul>
                            {socials.map(({label, href}, key)=>(
                                <li key={key} className=''>
                                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="" className="">
                    <img src="./images/logo.svg" alt="logo" width={40} height={40} />
                </a>
                <p className="text-zinc-500 text-sm">
                    &copy; 2024 <span className="text-zinc-200">RaphealClinton</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer