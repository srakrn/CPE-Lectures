import math, numpy, scipy
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

n = numpy.arange(1, 7)
log_n = numpy.log(n)
n_log_n = n * log_n
n_square = n**2

plt.plot(n, n, label='O(n)')
plt.plot(n, log_n, label='O(log n)')
plt.plot(n, n_log_n, label='O(n log n)')
plt.plot(n, n_square, label='O(n^2)')

plt.legend()
plt.savefig('big_o_chart.svg')
