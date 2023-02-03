EADME.md



# Python - Test-driven development



In this project, I started practicing test-driven development using `docstring`

and `unittest` in Python.



## Tests :heavy_check_mark:



* [tests](./tests): Folder of test files. Includes both Holberton-provided ones as well as the

following eight independently-developed:

  * [0-add_integer.txt](./tests/0-add_integer.txt)

  * [2-matrix_divided.txt](./tests/2-matrix_divided.txt)

  * [3-say_my_name.txt](./tests/3-say_my_name.txt)

  * [4-print_square.txt](./tests/4-print_square.txt)

  * [5-text_indentation.txt](./tests/text_indentation.txt)

  * [6-max_integer_test.py](./tests/6-max_integer_test.py)

  * [100-matrix_mul.txt](./tests/100-matrix_mul.txt)

  * [101-lazy_matrix_mul.txt](./tests/101-lazy_matrix_mul.txt)



## Function Prototypes :floppy_disk:



Prototypes for functions written in this project:



| File                     | Prototype                                    |

| ------------------------ | -------------------------------------------- |

| `0-add_integer.py`       | `def add_integer(a, b=98):`                  |

| `2-matrix_divided.py`    | `def matrix_divided(matrix, div):`           |

| `3-say_my_name.py`       | `def say_my_name(first_name, last_name=""):` |

| `4-print_square.py`      | `def print_square(size):`                    |

| `5-text_indentation.py`  | `def text_indentation(text):`                |

| `100-matrix_mul.py`      | `def matrix_mul(m_a, m_b):`                  |

| `101-lazy_matrix_mul.py` | `def lazy_matrix_mul(m_a, m_b):`             |

| `102-python.c`           | `void print_python_string(PyObject *p);`     |



## Tasks :page_with_curl:



* **0. Integers addition**

  * [0-add_integer.py](./0-add_integer.py): Python function that returns the integer addition

  of two numbers.

  * If either of `a` or `b` is not an `int` or `float`, a `TypeError` is raised

  with the message `a must be an integer` or `b must be an integer`.

  * If either of `a` or `b` is a `float`, it is casted to an `int`

  before addition.



* **1. Divide a matrix**

  * [2-matrix_divided.py](./2-matrix_divided.py): Python function that divides all

  elements of a matrix by a common divisor.

  * Returns a new matrix representing the division of all elements of `matrix`

  by `div`.

  * Quotients are rounded to two decimal places.

  * If `matrix` is not a list of lists of `int`s or `float`s, a `TypeError`

  is raised with the message `matrix must be a matrix (list of lists) of

  integers/floats`.

  * If `matrix` contains rows of different lengths, a `TypeError` is raised

  with the message `Each row of the matrix must have the same size`.

  * If the divisor `div` is not an `int` or `float`, a `TypeError` is raised

  with the message `div must be a number`.

  * If `div` is `0`, a `ZeroDivisionError` is raised with the message

  `division by zero`.



* **2. Say my name**

  * [3-say_my_name.py](./3-say_my_name.py): Python function that prints a name in

  the format `My name is <first_name> <last_name>`.

  * If either of `first_name` or `last_name` is not a `str`, a `TypeError` is

  raised with the message `first_name must be a string` or `last_name must be a

  string`.



* **3. Print square**

  * [4-print_square.py](./4-print_square.py): Python function that prints a square using

  the `#` character.

  * The paramter `size` represents the height/width of the square.

  * If `size` is not an `int`, a `TypeError` is raised  with the message,

  `size must be an integer`.

  * If `size` is less than `0`, a `ValueError` is raised with the message `size

  must be >= 0`.



* **4. Text indentation**

  * [5-text_indentation.py](./5-text_indentation.py): Python function that prints text with

  indentation.

  * Two new lines are printed after any `.`, `?`, or `:` character.

  * If `text` is not a `str`, a `TypeError` is raised with the message `text

  must be a string`.

  * No spaces are printed at the beginning or end of each printed line.



* **5. Max integer - Unittest**

  * [tests/6-max_integer_test.py](./tests/6-max_integer_text.py): Python class/script

  that runs unittests for the function `def max_integer(list=[]):`

  (provided by Holberton School).



* **6. Matrix multiplication**

  * [100-matrix_mul.py](./100-matrix_mul.py): Python function that multiplies two matrices.

  * Returns a new matrix representing the multiplication of `m_a` by `m_b`.

  * If either of `m_a` or `m_b` is empty (ie. `== []` or `== [[]]`), a

  `ValueError` is raised with the message `m_a can't be empty` or `m_b can't

  be empty`.

  * If either of `m_a` or `m_b` is not a list, a `TypeError` is raised with

  the message `m_a must be a list` or `m_b` must be a list.

  * If either of `m_a` or `m_b` is not a list of lists, a `TypeError` is raised

  with the message `m_a must be a list of lists` or `m_b must be a list of lists`.

  * If either of `m_a` or `m_b` is not a list of lists of `int`s or `float`s, a

  `TypeError` is raised with the message `m_a should contain only integers or

  floats` or `m_b should contain only integers or floats`.

  * If either of `m_a` or `m_b` contains rows of different lengths, a `TypeError`

  is raised with the message `each row of m_a must should be of the same size` or

  `each row of m_b must should be of the same size`.

  * If `m_a` and `m_b` cannot be multiplied (ie. row size of `m_a` does not match

  column size of `m_b`), a `ValueError` is raised with the message `m_a and m_b

  can't be multiplied`.



* **7. Lazy matrix multiplication**

  * [101-lazy_matrix_mul.py](./101-lazy_matrix_mul.py): Python function that multiplies

  two matrices using the module `NumPy`.

  * Identical in function to [100-matrix_mul.py](./100-matrix_mul.py).



* **8. CPython #3: Python Strings**

  * [102-python.c](./102-python.c): C function that prints basic information about Python

  string objects.





++++++++++++++++++++++++++++++++++++++



0-main.py



#!/usr/bin/python3

add_integer = __import__('0-add_integer').add_integer



print(add_integer(1, 2))

print(add_integer(100, -2))

print(add_integer(2))

print(add_integer(100.3, -2))

try:

    print(add_integer(4, "School"))

except Exception as e:

    print(e)

try:

    print(add_integer(None))

except Exception as e:

    print(e)





++++++++++++++++++++++++++++++++++



2-main.py



#!/usr/bin/python3

matrix_divided = __import__('2-matrix_divided').matrix_divided



matrix = [

    [1, 2, 3],

    [4, 5, 6]

]

print(matrix_divided(matrix, 3))

print(matrix)





+++++++++++++++++++++++++++++++++++



3-main.py



#!/usr/bin/python3

say_my_name = __import__('3-say_my_name').say_my_name



say_my_name("John", "Smith")

say_my_name("Walter", "White")

say_my_name("Bob")

try:

    say_my_name(12, "White")

except Exception as e:

    print(e)





+++++++++++++++++++++++++++++++++++



4-main.py



#!/usr/bin/python3

print_square = __import__('4-print_square').print_square



print_square(4)

print("")

print_square(10)

print("")

print_square(0)

print("")

print_square(1)

print("")

try:

    print_square(-1)

except Exception as e:

    print(e)

print("")





+++++++++++++++++++++++++++++++



5-main.py



#!/usr/bin/python3

text_indentation = __import__('5-text_indentation').text_indentation



text_indentation("""Lorem ipsum dolor sit amet, consectetur adipiscing elit. \

Quonam modo? Utrum igitur tibi litteram videor an totas paginas commovere? \

Non autem hoc: igitur ne illud quidem. Fortasse id optimum, sed ubi illud: \

Plus semper voluptatis? Teneo, inquit, finem illi videri nihil dolere. \

Transfer idem ad modestiam vel temperantiam, quae est moderatio cupiditatum \

rationi oboediens. Si id dicis, vicimus. Inde sermone vario sex illa a Dipylo \

stadia confecimus. Sin aliud quid voles, postea. Quae animi affectio suum \

cuique tribuens atque hanc, quam dico. Utinam quidem dicerent alium alio \

beatiorem! Iam ruinas videres""")





+++++++++++++++++++++++++++++++





0-add_integer.py



#!/usr/bin/python3

# 0-add_integer.py

"""Defines an integer addition function."""





def add_integer(a, b=98):

    """Return the integer addition of a and b.



    Float arguments are typecasted to ints before addition is performed.



    Raises:

        TypeError: If either of a or b is a non-integer and non-float.

    """

    if ((not isinstance(a, int) and not isinstance(a, float))):

        raise TypeError("a must be an integer")

    if ((not isinstance(b, int) and not isinstance(b, float))):

        raise TypeError("b must be an integer")

    return (int(a) + int(b))





========================



2-matrix_divided.py



#!/usr/bin/python3

# 2-matrix_divided.py

"""Defines a matrix division function."""





def matrix_divided(matrix, div):

    """Divide all elements of a matrix.



    Args:

        matrix (list): A list of lists of ints or floats.

        div (int/float): The divisor.

    Raises:

        TypeError: If the matrix contains non-numbers.

        TypeError: If the matrix contains rows of different sizes.

        TypeError: If div is not an int or float.

        ZeroDivisionError: If div is 0.

    Returns:

        A new matrix representing the result of the division.

    """

    if (not isinstance(matrix, list) or matrix == [] or

            not all(isinstance(row, list) for row in matrix) or

            not all((isinstance(ele, int) or isinstance(ele, float))

                    for ele in [num for row in matrix for num in row])):

        raise TypeError("matrix must be a matrix (list of lists) of "

                        "integers/floats")



    if not all(len(row) == len(matrix[0]) for row in matrix):

        raise TypeError("Each row of the matrix must have the same size")



    if not isinstance(div, int) and not isinstance(div, float):

        raise TypeError("div must be a number")



    if div == 0:

        raise ZeroDivisionError("division by zero")



    return ([list(map(lambda x: round(x / div, 2), row)) for row in matrix])





===============================



3-say_my_name.py



#!/usr/bin/python3

# 3-say_my_name.py

"""Defines a name-printing function."""





def say_my_name(first_name, last_name=""):

    """Print a name.



    Args:

        first_name (str): The first name to print.

        last_name (str): The last name to print.

    Raises:

        TypeError: If either of first_name or last_name are not strings.

    """

    if not isinstance(first_name, str):

        raise TypeError("first_name must be a string")

    if not isinstance(last_name, str):

        raise TypeError("last_name must be a string")

    print("My name is {} {}".format(first_name, last_name))





==============================

4-print_square.py



#!/usr/bin/python3

# 4-print_square.py

"""Defines a square-printing function."""





def print_square(size):

    """Print a square with the # character.



    Args:

        size (int): The height/width of the square.

    Raises:

        TypeError: If size is not an integer.

        ValueError: If size is < 0

    """

    if not isinstance(size, int):

        raise TypeError("size must be an integer")

    if size < 0:

        raise ValueError("size must be >= 0")



    for i in range(size):

        [print("#", end="") for j in range(size)]

        print("")





=================================



5-text_indentation.py





#!/usr/bin/python3

999-text_indentation.py

"""Defines a text-indentation function."""





def text_indentation(text):

    """Print text with two new lines after each '.', '?', and ':'.



    Args:

        text (string): The text to print.

    Raises:

        TypeError: If text is not a string.

    """

    if not isinstance(text, str):

        raise TypeError("text must be a string")



    c = 0

    while c < len(text) and text[c] == ' ':

        c += 1



    while c < len(text):

        print(text[c], end="")

        if text[c] == "\n" or text[c] in ".?:":

            if text[c] in ".?:":

                print("\n")

            c += 1

            while c < len(text) and text[c] == ' ':

                c += 1

            continue

        c += 1







+++++++++++++++++++++++++++++++++



6-max_integer.py



#!/usr/bin/python3

"""Module to find the max integer in a list

"""





def max_integer(list=[]):

    """Function to find and return the max integer in a list of integers

        If the list is empty, the function returns None

    """

    if len(list) == 0:

        return None

    result = list[0]

    i = 1

    while i < len(list):

        if list[i] > result:

            result = list[i]

        i += 1

    return result





================================



100-main.py





#!/usr/bin/python3

matrix_mul = __import__('100-matrix_mul').matrix_mul



print(matrix_mul([[1, 2], [3, 4]], [[1, 2], [3, 4]]))

print(matrix_mul([[1, 2]], [[3, 4], [5, 6]]))





++++++++++++++++++++++++++++++++



100-matrix_mul.py



#!/usr/bin/python3

# 100-matrix_mul.py

"""Defines a matrix multiplication function."""





def matrix_mul(m_a, m_b):

    """Multiply two matrices.



    Args:

        m_a (list of lists of ints/floats): The first matrix.

        m_b (list of lists of ints/floats): The second matrix.

    Raises:

        TypeError: If either m_a or m_b is not a list of lists of ints/floats.

        TypeError: If either m_a or m_b is empty.

        TypeError: If either m_a or m_b has different-sized rows.

        ValueError: If m_a and m_b cannot be multiplied.

    Returns:

        A new matrix representing the multiplication of m_a by m_b.

    """



    if m_a == [] or m_a == [[]]:

        raise ValueError("m_a can't be empty")

    if m_b == [] or m_b == [[]]:

        raise ValueError("m_b can't be empty")



    if not isinstance(m_a, list):

        raise TypeError("m_a must be a list")

    if not isinstance(m_b, list):

        raise TypeError("m_b must be a list")



    if not all(isinstance(row, list) for row in m_a):

        raise TypeError("m_a must be a list of lists")

    if not all(isinstance(row, list) for row in m_b):

        raise TypeError("m_b must be a list of lists")



    if not all((isinstance(ele, int) or isinstance(ele, float))

               for ele in [num for row in m_a for num in row]):

        raise TypeError("m_a should contain only integers or floats")

    if not all((isinstance(ele, int) or isinstance(ele, float))

               for ele in [num for row in m_b for num in row]):

        raise TypeError("m_b should contain only integers or floats")



    if not all(len(row) == len(m_a[0]) for row in m_a):

        raise TypeError("each row of m_a must should be of the same size")

    if not all(len(row) == len(m_b[0]) for row in m_b):

        raise TypeError("each row of m_b must should be of the same size")



    if len(m_a[0]) != len(m_b):

        raise ValueError("m_a and m_b can't be multiplied")



    inverted_b = []

    for r in range(len(m_b[0])):

        new_row = []

        for c in range(len(m_b)):

            new_row.append(m_b[c][r])

        inverted_b.append(new_row)



    new_matrix = []

    for row in m_a:

        new_row = []

        for col in inverted_b:

            prod = 0

            for i in range(len(inverted_b[0])):

                prod += row[i] * col[i]

            new_row.append(prod)

        new_matrix.append(new_row)



    return new_matrix





=================================



101-main.py





#!/usr/bin/python3

lazy_matrix_mul = __import__('101-lazy_matrix_mul').lazy_matrix_mul



print(lazy_matrix_mul([[1, 2], [3, 4]], [[1, 2], [3, 4]]))

print(lazy_matrix_mul([[1, 2]], [[3, 4], [5, 6]]))





+++++++++++++++++++++++++++++++++



101-lazy_matrix_mul.py



#!/usr/bin/python3

# 101-lazy_matrix_mul.py

"""Defines a matrix multiplication function using NumPy."""

import numpy as np





def lazy_matrix_mul(m_a, m_b):

    """Return the multiplication of two matrices.



    Args:

        m_a (list of lists of ints/floats): The first matrix.

        m_b (list of lists of ints/floats): The second matrix.

    """



    return (np.matmul(m_a, m_b))





=============================



102-python.c



/*

 * File: 102-python.c

 */



#include "Python.h"



/**

 * print_python_string - Prints information about Python strings.

 * @p: A PyObject string object.

 */

void print_python_string(PyObject *p)

{

	long int length;



	fflush(stdout);



	printf("[.] string object info\n");

	if (strcmp(p->ob_type->tp_name, "str") != 0)

	{

		printf("  [ERROR] Invalid String Object\n");

		return;

	}



	length = ((PyASCIIObject *)(p))->length;



	if (PyUnicode_IS_COMPACT_ASCII(p))

		printf("  type: compact ascii\n");

	else

		printf("  type: compact unicode object\n");

	printf("  length: %ld\n", length);

	printf("  value: %ls\n", PyUnicode_AsWideCharString(p, &length));

}



==================================


