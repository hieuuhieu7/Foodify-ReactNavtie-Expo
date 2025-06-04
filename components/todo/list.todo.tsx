import { FlatList, Text, TouchableOpacity } from 'react-native';

interface IProps {
    todoList: ITodo[]
    deleteTodo: (value: number) => void;
}
const ListTodo = (props: IProps) => {
    const { todoList, deleteTodo } = props
    return (
        <>
            {/* <ScrollView style={{ width: '100%', borderWidth: 2, borderColor: 'blue', paddingHorizontal: 7, paddingVertical: 7 }}>
        {todoList.map((item, index) => {
          return (
            <Text key={item.id} style={{ fontSize: 20, marginBottom: 6, backgroundColor: 'pink', color: 'black', padding: 10 }}>{item.title}</Text>
          )
        })}
      </ScrollView> */}

            <FlatList style={{ width: '100%', borderWidth: 2, borderColor: 'blue', paddingHorizontal: 7, paddingVertical: 7 }}
                data={todoList}
                keyExtractor={item => item.id + ""}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { deleteTodo(item.id) }}
                        >
                            <Text style={{ fontSize: 20, marginBottom: 6, backgroundColor: 'pink', color: 'black', padding: 10 }}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
            >
            </FlatList>
        </>
    )
}

export default ListTodo;