#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
import pandas as pd
from matplotlib import pyplot as plt


# In[2]:


raw_data = pd.read_csv("Basketball.csv")


# In[3]:


raw_data


# In[4]:


raw_data.head()


# In[6]:


raw_data.shape


# In[7]:


raw_data.describe


# In[9]:


raw_data.dtypes


# In[10]:


Height = raw_data['Height']


# In[11]:


Height


# In[12]:


fig = plt.figure()
Height.value_counts().plot.pie(autopct='%1.0f%%',)
plt.title('Pie Chart of Height')
plt.show()


# In[14]:


import statsmodels.api as sm
from sklearn.linear_model import LinearRegression


# In[69]:


x = raw_data.iloc[:, 0:1].values


# In[70]:


x


# In[71]:


y = raw_data.iloc[:, 1:2].values


# In[72]:


y


# In[73]:


plt.scatter(x,y)


# In[74]:


model=LinearRegression()


# In[75]:


model.fit(x,y)


# In[82]:


model.predict(np.array([[5]]))


# In[86]:


model=sm.OLS (y,x).fit()
model.summary()


# In[ ]:




