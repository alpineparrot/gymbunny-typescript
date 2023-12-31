import { DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, Textarea } from "@chakra-ui/react";
import { TaskModel } from "./models";

type TaskProps = {
  index: number;
  task: TaskModel;
};

function Task({ index, task }: TaskProps) {
  return (
      <Box
        as="div"
        role="group"
        position="relative"
        rounded="lg"
        w={200}
        pl={3}
        pr={7}
        pt={3}
        pb={1}
        boxShadow="xl"
        cursor="grab"
        bgColor={task.color}
    >
       <IconButton
        position="absolute"
        top={0}
        right={0}
        zIndex={100}
        aria-label="delete-task"
        size="md"
        colorScheme="solid"
        color="gray.700"
        icon={<DeleteIcon />}
        opacity={0}
        _groundHover={{
            opacity: 1,
        }}
      />
      <Textarea
        value={task.title}
        fontWeight="semibold"
        cursor="inherit"
        border="none"
        p={0}
        resize="none"
        minH={70}
        maxH={200}
        focusBorderColor="none"
        color="gray.700"
        />
         </Box>
  );
}

export default Task;