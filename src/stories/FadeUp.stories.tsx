import type { Meta, StoryObj } from '@storybook/react'
import { FadeUp } from '../../lib'

const meta: Meta<typeof FadeUp> = {
  title: 'FadeUp',
  component: FadeUp,
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eos ex
        dicta dolorem voluptas eaque mollitia, illum labore, aliquid natus
        inventore ipsam quia laudantium iste dignissimos alias reiciendis
        voluptatibus earum itaque fuga tempora impedit ab! Maxime illo repellat
        harum debitis saepe alias sunt pariatur ab modi aut placeat, suscipit
        nihil!
      </p>
    )
  },
  render: (args) => (
    <>
      {[1, 2, 3].map((i) => (
        <FadeUp key={i} {...args} />
      ))}
    </>
  )
}

export default meta

type Story = StoryObj<typeof FadeUp>

export const Default: Story = {}

export const WithLongDelay: Story = {
  args: {
    delay: 1
  }
}

export const WithLongDuration: Story = {
  args: {
    duration: 2
  }
}
