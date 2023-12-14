import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='container'>
        <div className='flex justify-center items-center'>
            <h1>Admin Dashboard</h1>
            <Button className='m-2'>Click aqui.</Button>
        </div>
    </main>
  )
}
