package sample

expect class Sample() {
    fun checkMe(): Int
}

expect object Platform {
    fun name(): String
}

fun hello(): String = "Hello from ${Platform.name()}"

expect class Filter : FilterLogic

interface FilterLogic {
    fun filterLength(input: List<String>, limit: Int) =
        input.filter { element -> element.length <= limit }.map { it.toUpperCase() }
}

class test() {
}