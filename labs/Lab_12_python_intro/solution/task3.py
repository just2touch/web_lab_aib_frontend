def get_histogram(text):
    max_count = 0

    for i in text:
        if text[i] > max_count:
            max_count = text[i]

    char_array = ['' for _ in range(max_count + 1)]

    for i in range(len(text)):
        char_array[max_count] += list(text)[i]
    for i in range(max_count):
        for j in range(len(text)):
            if max_count - i <= text[char_array[max_count][j]]:
                char_array[i] += '#'
            else:
                char_array[i] += ' '

    return char_array


if __name__ == "__main__":
    with open("input_3.txt", "r") as file_input:
        text = {}
        while True:
            temp = file_input.read(1)
            if not temp:
                break
            if temp == '\n' or temp == ' ' or temp == '\t' or temp == '\r':
                continue
            if temp in text:
                text[temp] += 1
            else:
                text.update({temp: 1})

    histogram_array = get_histogram(text)

    for i in range(len(histogram_array)):
        print(histogram_array[i])

    file_input.close()
