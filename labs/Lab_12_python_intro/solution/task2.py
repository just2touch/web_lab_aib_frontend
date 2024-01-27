import statistics


def get_median(N: int, X):
    median_list = []  # список найденных медиан
    for i in range(1, N + 1):
        median = statistics.median(X[:i])
        median_list.append(median)
    medians_summary = sum(median_list)
    return medians_summary


if __name__ == "__main__":
    N = int(input("N: "))
    X = list(map(int, input().split()))

    print(get_median(N, X))
