import { Button, Popover, Sheet, Text, YStack, useToastController } from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'

export function HomeScreen() {
  const [open, setOpen] = useState(false)

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space height={2000}>
      <Popover open={open} placement="left">
        <Popover.Trigger>
          <Button onPress={() => setOpen(true)}>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content backgroundColor="white">
          <Text color="black">My popover</Text>
        </Popover.Content>
      </Popover>
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
