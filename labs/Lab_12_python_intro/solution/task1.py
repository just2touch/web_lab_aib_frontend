def moves_amount_count(N: int, M: int):
    board_array = [[0] * M for _ in range(N)]
    board_array[0][0] = 1
    for i in range(N):
        for j in range(M):
            '''если 2 вниз и 1 вправо или 1 вниз и 2 вправо'''
            if (i >= 2 and j >= 1) or (i >= 1 and j >= 2):
                board_array[i][j] = board_array[i - 1][j - 2] + board_array[i - 2][j - 1]
    return board_array[N - 1][M - 1]


if __name__ == "__main__":
    N = int(input("N: "))
    M = int(input("M: "))

    print(moves_amount_count(N, M))
