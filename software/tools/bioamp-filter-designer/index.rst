.. _bioamp-filter-designer:

BioAmp Filter Designer
########################

Overview
********

BioAmp Filter Designer is a Python-based desktop tool that generates ready-to-use digital filters for bio-potential signal processing applications such as ECG, EMG, EOG and EEG, for example when working with :ref:`BioAmp Hardware <upsidedownlabs_hardware_home>`. Pick a filter type, sampling rate, order and cutoff frequencies, choose a programming language, and the tool writes a complete Butterworth IIR filter class for you, along with an optional frequency response plot.

The generated filter is implemented as cascaded second-order sections (biquads) and comes as a class with ``process()`` and ``reset()`` methods, so you can create one object per channel for multi-channel signals.

.. figure:: ./media/overview.png
    :align: center
    :alt: Digital Filter Designer window with the Filter Configuration and Output Configuration panels on the left and an empty Generated Filter Code panel on the right

    BioAmp Filter Designer

Features
********

.. list-table::
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **Four Filter Types**
     - Lowpass, highpass, bandpass and bandstop Butterworth filters.
   * - **Five Output Languages**
     - Generate the filter as Python, JavaScript, TypeScript, C++ or Java code.
   * - **Class-Based Output**
     - The filter is generated as a class, so multiple objects can be created for multi-channel signals.
   * - **Frequency Response Plot**
     - Optionally save a frequency response image to check the filter before using it.
   * - **Input Validation**
     - Cutoff frequencies are checked against the Nyquist frequency, and the low cutoff must be below the high cutoff.
   * - **Built-in Help**
     - Every field has a ``?`` button that explains what it does.

Requirements
************

- Python 3.8 or higher
- pip package manager (comes with Python)
- Operating system: Windows / macOS / Linux

The Python packages the tool needs (``numpy``, ``scipy``, ``matplotlib`` and ``PyQt5``) are listed in ``requirements.txt`` and installed in the steps below.

Installation
************

1. Clone the `BioAmp Filter Designer <https://github.com/upsidedownlabs/BioAmp-Filter-Designer>`_ repository, or download it as a ZIP from GitHub and extract it.

   .. code-block:: bash

      git clone https://github.com/upsidedownlabs/BioAmp-Filter-Designer.git

2. Open the project directory.

   .. code-block:: bash

      cd BioAmp-Filter-Designer

3. Create and activate a virtual environment to keep the dependencies isolated from your system Python.

   .. code-block:: bash

      python -m venv .venv

   On Windows (PowerShell):

   .. code-block:: powershell

      .venv\Scripts\activate

   On macOS / Linux:

   .. code-block:: bash

      source .venv/bin/activate

4. Install the dependencies.

   .. code-block:: bash

      pip install -r requirements.txt

5. Run the application.

   .. code-block:: bash

      python GUI.py

This opens the Digital Filter Designer window.

Using the Application
*********************

The controls are in the left panel, which you can scroll to reach the options at the bottom. The generated filter code appears in the right panel.

Select the Filter Type
======================

Choose what the filter should do:

- **lowpass** blocks high frequencies and smooths the signal.
- **highpass** blocks low frequencies and removes constant (DC) offsets.
- **bandpass** allows only the frequencies within a range and blocks the rest.
- **bandstop** blocks the frequencies within a range, for example to remove 50 Hz or 60 Hz mains noise.

.. figure:: ./media/select-filter-type.png
    :align: center
    :alt: Filter Type dropdown open with the options lowpass, highpass, bandpass and bandstop, outlined in red

    Select the Filter Type

Enter the Sampling Rate
=======================

Enter the rate at which your signal is sampled, in samples per second (Hz). It must be at least twice the highest frequency you care about (the Nyquist theorem), so every cutoff frequency you enter has to be below half of the sampling rate.

.. figure:: ./media/enter-sample-rate.png
    :align: center
    :alt: Sampling Rate (Hz) field outlined in red

    Enter the Sampling Rate

Select the Filter Order
=======================

The filter order sets how steeply the filter cuts off frequencies. A higher order gives a steeper roll-off but needs more computation, and 2 to 8 is typical for most applications.

You can use any whole number from 1 to 20 (the default is 4). It does not have to be even.

.. note::

   For lowpass and highpass filters, the order you enter is the order of the filter. For bandpass and bandstop filters, it applies to each edge of the band, so the resulting filter has twice that order. For example, order 2 gives a 4th-order band filter made of two biquad sections.

.. figure:: ./media/select-filter-order.png
    :align: center
    :alt: Filter Order box outlined in red

    Select the Filter Order

Enter the Cutoff Frequency
==========================

For **lowpass** and **highpass** filters, enter a single cutoff frequency in Hz. A lowpass filter reduces the frequencies above it, and a highpass filter reduces the frequencies below it.

.. figure:: ./media/enter-cutoff-frequency.png
    :align: center
    :alt: Cutoff Frequency (Hz) field outlined in red for a lowpass filter

    Enter the Cutoff Frequency

For **bandpass** and **bandstop** filters, two fields appear. Enter the lower edge of the band in **Low Cutoff Freq (Hz)**:

.. figure:: ./media/enter-low-cutoff.png
    :align: center
    :alt: Low Cutoff Freq (Hz) field outlined in red with the filter type set to bandpass

    Enter the Low Cutoff Frequency

Then enter the upper edge of the band in **High Cutoff Freq (Hz)**:

.. figure:: ./media/enter-high-cutoff.png
    :align: center
    :alt: High Cutoff Freq (Hz) field outlined in red with the filter type set to bandpass

    Enter the High Cutoff Frequency

The low cutoff must be below the high cutoff, and both must be below half of the sampling rate.

Select the Programming Language
===============================

Choose the language to generate the filter in: **python**, **javascript**, **typescript**, **c++** or **java**.

.. figure:: ./media/select-language.png
    :align: center
    :alt: Programming Language dropdown open with python, javascript, typescript, c++ and java, outlined in red

    Select the Programming Language

Enter the Class Name
====================

The filter is generated as a class, so you can create multiple objects from it, one for each channel of your signal. Each object keeps its own filter state. Enter the name you want for the class, for example ``EEGFilter``.

.. figure:: ./media/enter-class-name.png
    :align: center
    :alt: Class Name field outlined in red containing EEGFilter

    Enter the Class Name

Enter the Output Filename
=========================

Enter the name of the file the filter is saved to. The extension is added automatically based on the language you selected (``.py``, ``.js``, ``.ts``, ``.cpp`` or ``.java``). The file is saved in the folder you launched the app from, which is the project folder if you followed the steps above.

.. figure:: ./media/enter-filename.png
    :align: center
    :alt: Output Filename field outlined in red containing EEGFilter

    Enter the Output Filename

Enable or Disable the Frequency Response Plot
=============================================

Use the **Generate Frequency Response Plot** checkbox to choose whether a frequency response image is saved along with the filter. When it is enabled, the plot is saved as ``<filename>_response.png`` in the same folder as the filter file. Hover over the ``?`` button next to it for a short description.

.. figure:: ./media/enable-disable-frequency-plot.png
    :align: center
    :alt: Generate Frequency Response Plot checkbox outlined in red with its help tooltip shown

    Enable or Disable the Frequency Response Plot

Generate the Filter
===================

Click **Generate Filter**. The generated code appears in the **Generated Filter Code** panel, the file is saved, and the **Status** box below the button shows what was created.

The code ends with commented-out usage examples for single-channel and multi-channel use. These are only for reference, so you do not need to copy them. To use the filter, select the generated code in the panel and copy it, or use the saved file.

.. figure:: ./media/generate-filter-button.png
    :align: center
    :alt: Generate Filter button outlined in red, with the generated C++ filter code shown in the right panel and status messages below the button

    Generate the Filter

Reference
*********

The filters are Butterworth IIR filters designed with SciPy: `scipy.signal.butter <https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.butter.html>`_.
