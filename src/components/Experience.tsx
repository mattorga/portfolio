import { 
  Box, 
  BoxItem,
  BoxFooter 
} from "./ui/Box"

const Experience = () => {
  return (
    <Box section="Experience">
      <BoxItem>
        <div className="grid grid-cols-[1fr_auto_auto]">
          <div className="text-left">Software Developer</div>
          <div className="text-center mx-4">@</div>
          <div className="text-left ml-2">Supervaise</div>
        </div>
      </BoxItem>
      <BoxFooter current={1} total={3} />
    </Box>
  )
}

export default Experience